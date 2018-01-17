import React from 'react';

const ItemHeader = props => {
    const { title, actionButtons } = props;

    return (
        <div className="dashboard-item-header">
            <div className="dashboard-item-header-title">{title}</div>
            {actionButtons}
        </div>
    );
};

export default ItemHeader;