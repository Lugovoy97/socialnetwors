import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.fon}>
                <img src='https://bipbap.ru/wp-content/uploads/2017/08/siyanie_luchi_liniya_fon_krugi_cvet_1920x1200.jpg'></img>
            </div>
            <div className={s.avatardescrition}>
                <img src='https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg'></img>
            </div>
            <div className={s.description}>
                Info
            </div>
        </div>
    );
}

export default ProfileInfo;