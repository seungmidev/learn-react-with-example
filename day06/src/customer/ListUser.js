import React from 'react';
import ItemUser from './ItemUser';

const ListUser = ({users, onRemove, onModify}) => {
    return (
        <div>
            <h2 className="users">모범택시 고객 리스트</h2>
            <table>
                <colgroup>
                    <col className="name" />
                    <col className="addr" />
                    <col className="admin" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">이름</th>
                        <th scope="col">주소</th>
                        <th scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <ItemUser key={user.id} user={user} onRemove={onRemove} onModify={onModify} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListUser;