// Su dung React de tao component xem truoc. 'h' la viet tat cua React.createElement
const h = React.createElement;

// Component de hien thi mot muc kiem tra SEO (vi du: Do dai tieu de)
const SeoCheckItem = ({ title, passed, recommendation }) => {
  const icon = passed
    ? h('span', { style: { color: '#28a745', marginRight: '8px', fontSize: '18px' } }, '✓') // Mau xanh la
    : h('span', { style: { color: '#dc3545', marginRight: '8px', fontSize: '18px' } }, '✗'); // Mau do
  
  const textStyle = passed ? { color: '#28a745' } : { color: '#dc3545' };

  return h('li', { style: { marginBottom: '10px', listStyle: 'none' } },
    h('div', { style: { display: 'flex', alignItems: 'center' } },
      icon,
      h('strong', { style: textStyle }, title)
    ),
    !passed && recommendation && h('p', { style: { fontSize: '13px', color: '#666', margin: '4px 0 0 26px', fontStyle: 'italic' } }, recommendation)
  );
};

// Component chinh de xem truoc san pham voi bang phan tich SEO
// Su dung createClass tuong thich voi Decap CMS
const SeoProductPreview = window.React.createClass({
  displayName: 'SeoProductPreview',

  // Ham tinh toan diem SEO va cac van de can cai thien
  tinh_diem_seo: function() {
    const data = this.props.entry.get('data').toJS();
    let score = 0;
    const issues = [];
    
    const tuKhoaChinh = (data.tu_khoa_chinh || '').trim().toLowerCase();
    const tieuDeSeo = data.seo_tieu_de || '';
    const moTaSeo = data.seo_mo_ta || '';
    const noiDung = data.thong_so_ky_thuat || '';

    // 1. Kiem tra da dat tu khoa chinh chua
    const coTuKhoaChinh = tuKhoaChinh.length > 0;
    if (coTuKhoaChinh) {
      score += 10;
      issues.push({ key: 'has-keyword', title: 'Đã đặt từ khóa chính', passed: true });
    } else {
      issues.push({ key: 'no-keyword', title: 'Chưa đặt từ khóa chính', passed: false, recommendation: 'Hãy đặt một từ khóa chính để tập trung tối ưu hóa nội dung.' });
    }

    // 2. Kiem tra tu khoa chinh co trong tieu de SEO khong
    const tuKhoaTrongTieuDe = coTuKhoaChinh && tieuDeSeo.toLowerCase().includes(tuKhoaChinh);
    if (tuKhoaTrongTieuDe) {
      score += 20;
      issues.push({ key: 'keyword-in-title', title: 'Từ khóa chính có trong Tiêu đề SEO', passed: true });
    } else {
      issues.push({ key: 'keyword-not-in-title', title: 'Từ khóa chính KHÔNG có trong Tiêu đề SEO', passed: false, recommendation: 'Quan trọng: Hãy thêm từ khóa chính vào Tiêu đề SEO.' });
    }

    // 3. Kiem tra do dai tieu de SEO
    const doDaiTieuDeOk = tieuDeSeo.length >= 50 && tieuDeSeo.length <= 60;
    if (doDaiTieuDeOk) {
      score += 20;
      issues.push({ key: 'title-length-ok', title: 'Độ dài Tiêu đề SEO tốt (50-60 ký tự)', passed: true });
    } else {
      issues.push({ key: 'title-length-bad', title: `Độ dài Tiêu đề SEO là ${tieuDeSeo.length} ký tự`, passed: false, recommendation: 'Độ dài lý tưởng cho Tiêu đề SEO là từ 50 đến 60 ký tự.' });
    }

    // 4. Kiem tra tu khoa chinh co trong mo ta SEO khong
    const tuKhoaTrongMoTa = coTuKhoaChinh && moTaSeo.toLowerCase().includes(tuKhoaChinh);
    if (tuKhoaTrongMoTa) {
      score += 20;
      issues.push({ key: 'keyword-in-desc', title: 'Từ khóa chính có trong Mô tả SEO', passed: true });
    } else {
      issues.push({ key: 'keyword-not-in-desc', title: 'Từ khóa chính KHÔNG có trong Mô tả SEO', passed: false, recommendation: 'Hãy thêm từ khóa chính vào Mô tả SEO để cải thiện điểm.' });
    }
    
    // 5. Kiem tra da co mo ta SEO chua
    const coMoTa = moTaSeo.length > 0;
    if (coMoTa) {
        score += 10;
        issues.push({ key: 'has-desc', title: 'Đã viết Mô tả SEO', passed: true });
    } else {
        issues.push({ key: 'no-desc', title: 'Chưa có Mô tả SEO', passed: false, recommendation: 'Viết Mô tả SEO hấp dẫn sẽ tăng tỷ lệ nhấp chuột từ Google.' });
    }

    // 6. Kiem tra mat do tu khoa trong noi dung
    const words = noiDung.toLowerCase().split(/\s+/).filter(Boolean).length;
    const keywordCount = coTuKhoaChinh ? (noiDung.toLowerCase().match(new RegExp(tuKhoaChinh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length : 0;
    const density = words > 0 ? (keywordCount / words) * 100 : 0;
    const matDoOk = coTuKhoaChinh && density >= 0.5 && density <= 2.5;
    if (matDoOk) {
        score += 20;
        issues.push({ key: 'density-ok', title: `Mật độ từ khóa tốt (${density.toFixed(2)}%)`, passed: true });
    } else if (coTuKhoaChinh) {
        issues.push({ key: 'density-bad', title: `Mật độ từ khóa là ${density.toFixed(2)}%`, passed: false, recommendation: 'Mật độ từ khóa nên nằm trong khoảng 0.5% đến 2.5%. Hãy điều chỉnh lại nội dung.'});
    } else {
        issues.push({ key: 'density-no-keyword', title: 'Chưa thể tính mật độ từ khóa', passed: false, recommendation: 'Hãy nhập từ khóa chính để có thể phân tích mật độ.'});
    }

    // Dieu chinh diem so de khong vuot qua 100
    score = Math.min(100, Math.round(score));
    
    // Chon mau sac cho vong tron diem so
    let scoreColor, scoreText;
    if (score >= 80) {
      scoreColor = '#28a745'; // Green
      scoreText = 'Tốt';
    } else if (score >= 50) {
      scoreColor = '#ffc107'; // Yellow
      scoreText = 'Khá';
    } else {
      scoreColor = '#dc3545'; // Red
      scoreText = 'Cần cải thiện';
    }

    return { score, issues, scoreColor, scoreText };
  },

  render: function() {
    const { score, issues, scoreColor, scoreText } = this.tinh_diem_seo();
    const body = this.props.widgetFor('thong_so_ky_thuat');
    const title = this.props.entry.getIn(['data', 'tieu_de']);
    
    const panelStyle = {
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    };

    const scoreCircleStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: scoreColor,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      fontWeight: 'bold',
      flexShrink: 0,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      border: '3px solid white',
    };
    
    return h('div', { style: { border: '1px solid #eee' } },
      // Bang dieu khien SEO
      h('div', { style: panelStyle },
        h('h2', { style: { marginTop: 0, borderBottom: '2px solid ' + scoreColor, paddingBottom: '10px', color: '#333' } }, 'Bảng Phân Tích SEO'),
        h('div', { style: { display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' } },
          h('div', { style: scoreCircleStyle }, score.toString()),
          h('div', {},
            h('h3', { style: { margin: 0, fontSize: '20px', color: scoreColor } }, 'Điểm SEO: ' + scoreText),
            h('p', { style: { margin: '4px 0 0', color: '#555' } }, 'Đây là điểm ước tính. Hãy cố gắng đạt điểm Xanh để có hiệu quả tốt nhất.')
          )
        ),
        h('h3', { style: { marginTop: '25px', marginBottom: '15px', color: '#444' } }, 'Các mục cần kiểm tra:'),
        h('ul', { style: { listStyle: 'none', padding: 0, margin: 0, columnCount: 2, columnGap: '20px' } },
          ...issues.map(issue => h(SeoCheckItem, { ...issue, key: issue.key }))
        )
      ),

      // Phan xem truoc noi dung goc cua san pham
      h('div', { className: 'prose', style: { padding: '20px', backgroundColor: 'white' } },
        h('h1', {}, title),
        body
      )
    );
  }
});

// Dang ky ban xem truoc tuy chinh voi Decap CMS
// CMS.registerPreviewTemplate can duoc goi sau khi Decap CMS duoc tai xong
CMS.registerPreviewTemplate('san_pham', SeoProductPreview);
