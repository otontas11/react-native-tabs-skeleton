const space = [];

const radii = {
  normal: 6,
  full: 999,
};
const color = {
  red: '#E11E3C',
  gray: '#758291',
};
export default {
  space,
  radii,
  color,
};

//mantıkk: style-system önce beniz kutuphaneme bakar . eğer theme içerisnde tanımlı ise onu alır eğer yoksa kendi kutuğhanesinden alır
//m={4} değeri için bende yoksa kendi space dosas içerisnden [0 , 2 ,4,8,16,32,64.....] 16 değerini çağırır.
//bu tur çakışmaları önlemek için themProvider kullanılr
