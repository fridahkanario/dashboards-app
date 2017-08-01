import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as fromReducers from '../../reducers';
import * as fromActions from '../../actions';

import DashboardBar from './DashboardBar';
import DashboardList from './DashboardList';

const mapStateToProps = state => {
    return {
        dashboards: fromReducers.sGetDashboards(state),
        isFetching: fromReducers.fromDashboardsConfig.sGetIsFetchingFromState(state),
        selectedId: fromReducers.fromDashboardsConfig.sGetSelectedIdFromState(state),
        textFilter: fromReducers.fromDashboardsConfig.sGetTextFilterFromState(state),
        showFilter: fromReducers.fromDashboardsConfig.sGetShowFilterFromState(state),
        sortFilter: fromReducers.fromDashboardsConfig.sGetSortFilterFromState(state),
        viewFilter: fromReducers.fromDashboardsConfig.sGetViewFilterFromState(state)
    };
};

const mapDispatchToProps = dispatch => ({
    onClickDashboard: id => dispatch(fromActions.acSetDashboardsConfigSelectedId(id)),
    onChangeTextFilter: value => dispatch(fromActions.acSetDashboardsConfigTextFilter(value)),
    onClickShowFilter: value => dispatch(fromActions.acSetDashboardsConfigShowFilter(value)),
    onClickSortFilterKey: value => dispatch(fromActions.acSetDashboardsConfigSortFilterKey(value)),
    onClickSortFilterDirection: value => dispatch(fromActions.acSetDashboardsConfigSortFilterDirection(value)),
    onClickViewFilter: value => dispatch(fromActions.acSetDashboardsConfigViewFilter(value))
});

let DashboardSelectCt = props => (
    <div>
        <DashboardBar {...props} />
        <DashboardList {...props} />
    </div>
);

DashboardSelectCt = connect(mapStateToProps, mapDispatchToProps)(DashboardSelectCt);

DashboardSelectCt.propTypes = {
    dashboards: PropTypes.array,
    isFetching: PropTypes.bool,
    selectedId: PropTypes.string,
    textFilter: PropTypes.string,
    showFilter: PropTypes.string,
    sortFilter: PropTypes.object,
    viewFilter: PropTypes.string,
    onClickDashboard: PropTypes.func,
    onChangeTextFilter: PropTypes.func,
    onClickShowFilter: PropTypes.func,
    onClickSortFilter: PropTypes.func,
    onClickViewFilter: PropTypes.func
};

export default DashboardSelectCt;