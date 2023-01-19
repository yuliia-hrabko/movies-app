import React, { FC } from 'react';

import { PopularItem } from '@/components';

import { IPopularProps } from '@/components/Popular/type';

import './styles.scss';

const Popular: FC<IPopularProps> = ({ items, classname }) => {
     return (
          <div className={`popular ${classname}`}>
               <h2 className="popular__title">Popular on TinyMoviez</h2>
               <div className="popular-items">
                    {items.map(item => {
                         return <PopularItem {...item} />;
                    })}
               </div>
          </div>
     );
};

export default Popular;
