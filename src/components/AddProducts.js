import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const AddProducts = () => {
  return (
    <div className="add-product flex flex-col">
      <div className="hdr flex aic">
        <div className="corss-icon flex aic jc pointer">
          <CloseIcon />
        </div>
        <div className="lbl s18 font b7">Add Product</div>
      </div>
      <div className="block flex">
        <div className="meta flex flex-col">
          <div className="lbl s20 b6">Product Image</div>
          <div className="img-box flex  flex-col aic">
            <input type="file" className="select-img" />
            <div className="lbl-size s12 font">Max filesize 10 MB</div>
            <div className="lbl-size-r s12 font">
              Recommended image size 960x960 px
            </div>
          </div>
          <div className="lbl s20 b6">Details</div>
          <div className="text-field flex flex-col">
            <div className="txt-lbl">NAME*</div>
            <input type="text" className="txt cleanbtn" />
          </div>
          <div className="text-field flex flex-col">
            <div className="txt-lbl">Price*</div>
            <input type="number" className="txt cleanbtn" />
          </div>
          <div className="text-field flex flex-col">
            <div className="txt-lbl">DESCRIPTION</div>
            <input type="text" className="txt cleanbtn" />
          </div>
          <div className="lbl s20 b6">Inventory</div>
          <div className="select-field flex aic">
            <input type="checkbox" className="check-box" />
            <div className="select-lbl">This product has limited stock</div>
          </div>
          <div className="lbl s20 b6">Variants</div>
          <div className="select-field flex aic">
            <input type="checkbox" className="check-box" />
            <div className="select-lbl">
              This product comes in multiple options
            </div>
          </div>
          <div className="lbl s20 b6">Add-ons</div>
          <div className="select-field flex aic">
            <input type="checkbox" className="check-box" />
            <div className="select-lbl">This product has add-on items</div>
          </div>
          <div className="lbl s20 b6">Yezza Store Features</div>
          <div className="text-field flex flex-col">
            <div className="txt-lbl">PRICE BEFORE DISCOUNT</div>
            <input type="number" className="txt cleanbtn" />
          </div>
          <div className="text-field flex flex-col">
            <div className="txt-lbl">META DESCRIPTION (SEO)</div>
            <input type="text" className="txt cleanbtn" />
          </div>
          <div className="text-field flex flex-col">
            <div className="txt-lbl">META DESCRIPTION (SEO)</div>
            <input type="text" className="txt cleanbtn" />
          </div>
        </div>
      </div>
      <div className="prd-action flex aic">
        <button className="cleanbtn button btn-cancle">Cancle</button>
        <button className="cleanbtn button btn-add">ADD</button>
      </div>
    </div>
  );
};

export default AddProducts;
