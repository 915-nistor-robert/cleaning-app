import {SORT_OPTIONS} from "../GeneralUtils";

interface SortPanelComponentProps{
    sortFunction: (sortType: SORT_OPTIONS) => void;
    sortType: SORT_OPTIONS;
}

export default SortPanelComponentProps;