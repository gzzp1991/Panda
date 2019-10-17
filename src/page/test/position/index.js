import PositionCopy from './position';

// 获取省、省市数据
const getPosOption = type => {
  Reflect.preventExtensions(PositionCopy);
  switch (type) {
    // '省市'
    case 'city':
      return PositionCopy.map(v => ({
        value: v.value,
        label: v.label,
        children: v.children.map(t => ({ value: t.value, label: t.label })),
      }));
    // '省'
    case 'province':
      return PositionCopy.map(v => ({ value: v.value, label: v.label }));
    default:
      throw new Error('省市类型参数错误！');
  }
};

// 省市区
export const Position = PositionCopy;

// 省市
export const PositionCity = getPosOption('city');

// 省
export const PositionProvince = getPosOption('province');
