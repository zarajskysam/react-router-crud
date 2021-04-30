import React from 'react';

export default function Post (props) {
    const { info, postClick } = props;

    function updateDate(correctDate) {
        let difDate = new Date() - correctDate;
        
        if (difDate > 86400000) {
          const res = Math.round(difDate / 86400000);
          return `${res} ${syntaxDate(res, ['день', 'дня', 'дней'])} назад`;
        } else if (difDate > 3600000 ) {
          const res = Math.round(difDate / 3600000);
          return `${res} ${syntaxDate(res, ['час', 'часа', 'часов'])} назад`;
        } else if (difDate > 60000) {
          const res = Math.round(difDate / 60000);
          return `${res} ${syntaxDate(res, ['минуту', 'минуты', 'минут'])} назад`;
        } else {
            return `Только что`;
        }
    }

    function syntaxDate(number, arrTitles) {
        const decCache = [];
        const decCases = [2, 0, 1, 1, 1, 2];
        function decOfNum(number, titles) {
          if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
          return titles[decCache[number]];
        }
        return decOfNum(number, arrTitles);
    }

    return (
        <div className='post' onClick={postClick}>
            <div className="post_info">
                <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="Иван Петров" className="post_info_avatar"/>
                <div className="post_info_header">
                    <div className="post_info_header_name">Иван Петров</div>
                    <div className="post_info_header_work">Стажер</div>
                    <div className="post_info_header_date">{updateDate(info.created)}</div>
                </div>
            </div>
            <div className="post_content">
                {info.content}
            </div>
            {props.children}
        </div>
    )
}