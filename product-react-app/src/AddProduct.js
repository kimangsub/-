import React, { useEffect, useState } from "react";
import { Button, Grid, Grid2, TextField } from "@mui/material";
import { call } from "./service/ApiService";

const AddProduct = (props) => {
    const [item, setItem] = useState([])

    const addItem = props.addItem;

    const onButtonClick = () => {
        addEventListener(item);
        setItem(result.data);
    }

    const onInputChange = (e) => {
        setItem({title : e.target.value});
        console.log(item);
    }

    const enterKeyEventHandler = (e) => {
        if(e.key == 'Enter'){
            onButtonClick();
        }
    }

    useEffect(() => {
        call("/product", "POST")
            .then(result => {
                setItem(result.data);
            })
    },[])

    return(
        <Grid>
            <Grid>
                <TextField placeholder="상품 이름" fullWidth onChange={onInputChange} onKeyDown={enterKeyEventHandler} value={item.productName}/>
                <TextField placeholder="상품 재고" fullWidth onChange={onInputChange} onKeyDown={enterKeyEventHandler} value={item.productStock}/>
                <TextField placeholder="상품 가격" fullWidth onChange={onInputChange} onKeyDown={enterKeyEventHandler} value={item.productPrice}/>
            </Grid>
            <Grid>
    
            </Grid>
        </Grid>
    )

}

export default AddProduct;