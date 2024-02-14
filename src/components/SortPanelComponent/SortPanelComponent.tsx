import './SortPanelComponent.scss'
import SortPanelComponentProps from "../../utils/interfaces/SortPanelComponentProps";
import {SORT_OPTIONS} from "../../utils/GeneralUtils";

export default function SortPanelComponent(props: SortPanelComponentProps) {

    const handleSortChange = (value: any) => {
        props.sortFunction(value);
    };
    return (
        <div className={'sort-panels-container'}>
            <p className={'sort-text'}>Sort</p>
            <div className={'sort-buttons'}>
                <div className={'sort-button'}>
                    <input
                        type={'radio'}
                        id={'nameAsc'}
                        checked={props.sortType === SORT_OPTIONS.NAME_A_TO_Z}
                        onChange={() => handleSortChange(SORT_OPTIONS.NAME_A_TO_Z)}
                    />
                    <label htmlFor={'nameAsc'}>Name (A to Z)</label>
                </div>
                <div className={'sort-button'}>
                    <input
                        type={'radio'}
                        id={'nameDesc'}
                        checked={props.sortType === SORT_OPTIONS.NAME_Z_TO_A}
                        onChange={() => handleSortChange(SORT_OPTIONS.NAME_Z_TO_A)}
                    />
                    <label htmlFor={'nameDesc'}>Name (Z to A)</label>
                </div>
                <div className={'sort-button'}>
                    <input
                        type={'radio'}
                        id={'ratingHigh'}
                        checked={props.sortType === SORT_OPTIONS.RATING_HIGH_TO_LOW}
                        onChange={() => handleSortChange(SORT_OPTIONS.RATING_HIGH_TO_LOW)}
                    />
                    <label htmlFor={'ratingHigh'}>Rating (High to Low)</label>
                </div>
                <div className={'sort-button'}>
                    <input
                        type={'radio'}
                        id={'ratingLow'}
                        checked={props.sortType === SORT_OPTIONS.RATING_LOW_TO_HIGH}
                        onChange={() => handleSortChange(SORT_OPTIONS.RATING_LOW_TO_HIGH)}
                    />
                    <label htmlFor={'ratingLow'}>Rating (Low to High)</label>
                </div>
                <div className={'sort-button'}>
                    <input
                        type={'radio'}
                        id={'locationAsc'}
                        checked={props.sortType === SORT_OPTIONS.CITY_A_TO_Z}
                        onChange={() => handleSortChange(SORT_OPTIONS.CITY_A_TO_Z)}
                    />
                    <label htmlFor={'locationAsc'}>Location (A to Z)</label>
                </div>
                <div className={'sort-button'}>
                    <input
                        type={'radio'}
                        id={'locationDesc'}
                        checked={props.sortType === SORT_OPTIONS.CITY_Z_TO_A}
                        onChange={() => handleSortChange(SORT_OPTIONS.CITY_Z_TO_A)}
                    />
                    <label htmlFor={'locationDesc'}>Location (Z to A)</label>
                </div>
            </div>
        </div>
    );
}