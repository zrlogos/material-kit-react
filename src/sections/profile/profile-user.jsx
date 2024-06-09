import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaClipboardList, FaMoneyBillAlt, FaTruck, FaExchangeAlt, FaMapMarkedAlt, FaHeart, FaBookmark, FaStar } from 'react-icons/fa';
import avatar4 from '../../../public/assets/images/avatars/avatar_4.jpg';

const UserProfile = () => {
  // 这里假设我们从 Redux store 或其他数据源获取用户信息
  const user = {
    name: 'jack',
    avatar: avatar4,
    points: 1000,
    growth: 80,
    coupons: 5,
  };

  const handleClick = (action) => {
    // 根据不同的 action 执行相应的操作
    console.log(`执行 ${action} 操作`);
  };

  return (
    <div>
      <div className="user-profile" style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <div className="profile-header" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={user.avatar} alt={user.name} style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '16px' }} />
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="profile-stats" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px' }}>
          <div>
            <h3>{user.points}</h3>
            <p>积分</p>
          </div>
          <div>
            <h3>{user.growth}%</h3>
            <p>成长值</p>
          </div>
          <div>
            <h3>{user.coupons}</h3>
            <p>优惠券</p>
          </div>
        </div>
      </div>

      <div className="profile-orders-status" style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button type="button" onClick={() => handleClick('查看全部订单')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaClipboardList size={32} />
            <span>全部订单</span>
          </button>
          <button type="button" onClick={() => handleClick('查看待付款订单')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaMoneyBillAlt size={32} />
            <span>待付款</span>
          </button>
          <button type="button" onClick={() => handleClick('查看待收货订单')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaTruck size={32} />
            <span>待收货</span>
          </button>
          <button type="button" onClick={() => handleClick('查看退款/售后订单')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaExchangeAlt size={32} />
            <span>退款/售后</span>
          </button>
        </div>
      </div>

<div className="profile-other-functions" style={{ backgroundColor: '#e8e8e8', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <button type="button" onClick={() => handleClick('地址管理')} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '12px 0', backgroundColor: 'white', borderRadius: '4px' }}>
    <FaMapMarkedAlt size={24} />
    <span>地址管理</span>
  </button>
  <button type="button" onClick={() => handleClick('我的足迹')} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '12px 0', backgroundColor: 'white', borderRadius: '4px' }}>
    <FaHeart size={24} />
    <span>我的足迹</span>
  </button>
  <button type="button" onClick={() => handleClick('我的关注')} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '12px 0', backgroundColor: 'white', borderRadius: '4px' }}>
    <FaBookmark size={24} />
    <span>我的关注</span>
  </button>
  <button type="button" onClick={() => handleClick('我的收藏')} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '12px 0', backgroundColor: 'white', borderRadius: '4px' }}>
    <FaBookmark size={24} />
    <span>我的收藏</span>
  </button>
  <button type="button" onClick={() => handleClick('我的评价')} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '12px 0', backgroundColor: 'white', borderRadius: '4px' }}>
    <FaStar size={24} />
    <span>我的评价</span>
  </button>
</div>
    </div>
  );
};

export default UserProfile;