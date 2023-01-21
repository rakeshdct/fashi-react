import { React } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectedCategory, productSelector } from "../shop/product-dux";

const LeftNav = (props) => {
    const dispatch = useDispatch();
    const { selectedFilter, categories } = useSelector(productSelector);
    const { onFilterChange } = props
    const tags = []
    const brands = []
    const colors = []
    const pushData = (detail) => {
        tags.push(detail.tags);
        brands.push(detail.brand);
        colors.push(detail.color);
    }
    props.details.map(pushData)
    const withoutDuplicatesbrands = [...new Set(brands)];
    const withoutDuplicatescolors = [...new Set(colors)];
    const withoutDuplicatestags = [...new Set(tags)];
    const handleSelection = (catagory) => {
        dispatch(selectedCategory(catagory));
    }
    return (
        <div className="col-lg-3 col-md-6 col-sm-8 produts-sidebar-filter">
            <div className="filter-widget">
                <h4 className="fw-title">Categories {categories}</h4>
                <ul className="filter-catagories">                   
                    <li onClick={(e) => handleSelection("men")} className={categories === "men" ? 'active' : ''}><Link to="#">Men</Link></li>
                    <li onClick={(e) => handleSelection("women")} className={categories === "women" ? 'active' : ''}><Link to="#">Women</Link></li>
                    <li onClick={(e) => handleSelection("kids")} className={categories === "kids" ? 'active' : ''}><Link to="#">Kids</Link></li>
                </ul>
            </div>
            <div className="filter-widget">
                <h4 className="fw-title">Brand</h4>
                <div className="fw-brand-check">
                    {withoutDuplicatesbrands.map((brand, i) => (
                        <div key={i} className="bc-item">
                            <label htmlFor={brand}>
                                {brand}
                                <input onChange={onFilterChange} type="checkbox" value={brand} id={brand} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="filter-widget">
                <h4 className="fw-title">Price</h4>
                <div className="filter-range-wrap">
                    <div className="range-slider">
                        <div className="price-input">
                            <input type="text" id="minamount" />
                            <input type="text" id="maxamount" />
                        </div>
                    </div>
                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="33" data-max="98">
                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                </div>
                <Link to="#" className="filter-btn">Filter</Link>
            </div> */}
            <div className="filter-widget">
                <h4 className="fw-title">Color</h4>
                <div className="fw-color-choose">
                    {
                        withoutDuplicatescolors.map((color, i) => (
                            <div key={i} className="cs-item">
                                <input name="color" onChange={onFilterChange} value={color} type="radio" id={"cs-" + color} />
                                <label className={selectedFilter === color ? "active cs-" + color : "cs-" + color} htmlFor={"cs-" + color}>{color}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className="filter-widget">
                <h4 className="fw-title">Size</h4>
                <div className="fw-size-choose">
                    <div className="sc-item">
                        <input type="radio" id="s-size" />
                        <label htmlFor="s-size">s</label>
                    </div>
                    <div className="sc-item">
                        <input type="radio" id="m-size" />
                        <label htmlFor="m-size">m</label>
                    </div>
                    <div className="sc-item">
                        <input type="radio" id="l-size" />
                        <label htmlFor="l-size">l</label>
                    </div>
                    <div className="sc-item">
                        <input type="radio" id="xs-size" />
                        <label htmlFor="xs-size">xs</label>
                    </div>
                </div>
            </div> */}
            <div className="filter-widget">
                <h4 className="fw-title">Tags</h4>
                <div className="fw-tags">
                    {withoutDuplicatestags.map((tag, i) => (
                        <span key={i}>
                            <input name="tag" onChange={onFilterChange} value={tag} type="radio" id={tag} />
                            <label className={selectedFilter === tag ? 'active' : ''} htmlFor={tag}>{tag}</label>
                        </span>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default LeftNav