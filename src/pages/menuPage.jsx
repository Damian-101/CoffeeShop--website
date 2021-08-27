import "../js/slider";
import "../scss/_nav.scss";
import "../scss/_menuPage.scss";
import {dropdown} from "../js/menuNav";
import dropdownIcon from "../svg/dropdown-icon.svg";
import React, { useState, useEffect, useRef } from "react";
import latterefimg from "../images/coffee-latte-img.png";
import { removeDuplicates } from "../js/helper";
import LoadingScreen from "./loadingScreen"


const MenuPage = () => {
  const [data, setData] = useState();
  const [sortBy, setSortBy] = useState();
  const [category, setCategory] = useState();
  const [isLoaded, setLoaded] = useState(false)
  const [fetchErr,setFetchErr] = useState(false)

  useEffect(() => {
  
  let fetchData = () => {}
      fetchData = async () => {
      try{
      // get data from the api
      const response = await fetch("http://localhost:4000/menuItems");
      const data = await response.json();
      const items = await data;
      setData(items);
      setLoaded(true)
      }catch(err){
        console.log(err)
        setFetchErr(true)
      }
      };

    fetchData();
  }, []);

  dropdown()
  // useEffect(() => {
  // },[isLoaded])
  //get category data and return it
  const getCategoryInfo = () => {
    let categories;
    if (data) {
      categories = data.map((x) => {
        return x.main_cate_type;
      });
    }
    return categories;
  };

  //getting category data and render it to the dom
  const renderCategory = () => {
    let category;
    if (getCategoryInfo()) {
      category = removeDuplicates(getCategoryInfo()).map((category) => {
        return (
          <div className="category" onClick={categoryClick}>
            <label className="category-label">{category}</label>
            <input
              type="radio"
              value={category}
              name="category"
              className="category-input"
            />
          </div>
        );
      });
    }
    return category;
  };

  const categoryInputDOM = document.getElementsByName("category");
  const categoryDOM = document.getElementsByClassName("category");

  //if category checked update the state and add activeclass to the active item
  const updateCategoryDOM = () => {
    if (categoryInputDOM[0]) {
      categoryInputDOM.forEach((currentValue, currentIndex, listObj) => {
        if (currentValue.checked) {
          categoryDOM[currentIndex].classList.add("activeItem");
          setCategory(currentValue.value);
        } else {
          categoryDOM[currentIndex].classList.remove("activeItem");
        }
      });
    }
  };

  useEffect(() => {
    // adding checked to the first element of an array
    const onloadCheckedCategoryDOM = () => {
      if (categoryInputDOM[0]) {
        categoryInputDOM[0].checked = true;
      }
    };

    onloadCheckedCategoryDOM();
    updateCategoryDOM();
  }, [isLoaded]);

  // on category click
  const categoryClick = () => {
    updateCategoryDOM();
  };

  // getting item data and filtering it on active category type
  const filterItems = () => {
    let items;
    if (data) {
      items = data.map((item) => {
        if (category && category === item.main_cate_type) {
          return item;
        }
      });
      return items;
    }
  };

  const sortByOnChange = () => {
    //get items from the filtered function and return the sorted items
    const sortByDOM = document.getElementById("sortBy");
    if (sortByDOM) {
      setSortBy(sortByDOM.value);
    }
  };

  let sortedItems = (data) => {
    let items;
    if (sortBy) {
      //sort by alphabetical order
      if (sortBy === "a-z") {
        if (data) {
          items = data.sort((a, b) => {
            const nameA = a.item_name.toUpperCase();
            const nameB = b.item_name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        }
        return items;

        //sort by price lower to higher
      } else if (sortBy === "price-lower-to-higher") {
        let aItemPrice;
        let bItemPrice;
        if (data) {
          items = data.sort((a, b) => {
            if (a.item_status) {
              aItemPrice = a.item_status.map((x) => x.new_price);
            } else {
              aItemPrice = a.item_Price;
            }
            if (b.item_status) {
              bItemPrice = b.item_status.map((x) => x.new_price);
            } else {
              bItemPrice = b.item_Price;
            }
            return aItemPrice - bItemPrice;
          });
        }
        return items;
      } else if (sortBy === "price-higher-to-lower") {
        let aItemPrice;
        let bItemPrice;
        if (data) {
          items = data.sort((a, b) => {
            if (a.item_status) {
              aItemPrice = a.item_status.map((x) => x.new_price);
            } else {
              aItemPrice = a.item_Price;
            }
            if (b.item_status) {
              bItemPrice = b.item_status.map((x) => x.new_price);
            } else {
              bItemPrice = b.item_Price;
            }
            return bItemPrice - aItemPrice;
          });
        }
        return items;
      }else{
        return data;
      }
    } else {
      return data;
    }
  };

  // getting filtered items and render items to the dom
  const renderItem = () => {
    const items = sortedItems(filterItems());
    let item;
    if (items) {
      item = items.map((x) => {
        if (x) {
          let status;
          let newPrice;
          let statusActive;
          let cutOldPrice = "none";
          //add status items if status defined
          if (x.item_status) {
            statusActive = "status-active";

            x.item_status.map((x) => {
              status = x.status;
              newPrice = x.new_price;
              if (newPrice) {
                cutOldPrice = `line-through`;
              }
            });
          }
          return (
            <div className={`menuPage__item ${statusActive}`}>
              <div className="menuPage__item-left">
                <img src={x.img} alt="item-img" />
              </div>
              <div className="menuPage__item-right">
                {status && (
                  <div className={`menuPage__item-status ${statusActive}`}>
                    {status}
                  </div>
                )}
                <h4 className="menuPage__item-heading">{x.item_name}</h4>
                <h5 className="menuPage__item-description">{x.description}</h5>
                <h5
                  className="menuPage__item-price"
                  style={{
                    textDecoration: cutOldPrice,
                  }}
                >
                  ${x.item_Price}
                </h5>
                {newPrice && (
                  <h5 className="menuPage__item-new-price">${newPrice}</h5>
                )}
              </div>
            </div>
          );
        }
      });
    }
    return item;
  };

  const pageContent = () => {
    return(
      <section>
      <div className="menuPage">
        <nav className="menuPage__nav">
          <div className="menuPage__nav-wraper custom--container">
            <div className="menuPage__nav-top">
              <h2 className="menuPage__nav-heading">Menu</h2>
              <h4
                className="menuPage__nav-active-item-heading"
                id="activeHeading"
              >
                {category}
              </h4>
            </div>
          </div>
          <div
            className="menuPage__nav-category-items custom--container"
            id="dropdown-slider"
          >
            {renderCategory()}
          </div>
        </nav>
        <div className="menuPage__items-wraper">
          <select
            className="menuPage__sortBy"
            id="sortBy"
            onChange={sortByOnChange}
          >
            <option value="sortBy">Sort By</option>
            <option value="a-z">A - Z</option>
            <option value="price-higher-to-lower">Price Higher to Lower</option>
            <option value="price-lower-to-higher">Price lower to higher</option>
          </select>
          <div className="menuPage__items">{renderItem()}</div>
        </div>
      </div>
    </section>
    )
  }


  const page =  () => {
    if(isLoaded === true){
      return pageContent()
    }
    if(isLoaded === false){
      return <LoadingScreen fetchErr = {fetchErr}/>
    }
  }


  return (
    <>
    {page()}
    </>
  );
};

export default MenuPage;
