import React, {useState} from "react";
import {Button, Grid, Grid2, TextField} from "@mui/material";

const AddTodo = (props) => {
    const [item, setItem] = useState({title : ""});
    
    //새로운 객체를 배열에 추가해주는 메서드
    const addItem = props.addItem;

    //onButtonClick 함수 작성
    const onButtonClick = () => {
        addItem(item);
        setItem({title : ""})
    }

    //onInputChange 함수 작성
    //입력이 감지될 때마다 실행되는 함수
    const onInputChange = (e) => {
        setItem({title : e.target.value});
        console.log(item);
    }

    //enterKeyEventHandler 함수 작성
    const enterKeyEventHandler = (e) => {
        if(e.key == 'Enter'){
            onButtonClick();
        }
    }

    return(
        <Grid container style={{marginTop : 20}}>
            <Grid xs={11} md={11} item style={{paddingRight : 16}}>
                <TextField placeholder="Add Todo Here" fullWidth onChange={onInputChange} onKeyDown={enterKeyEventHandler} value={item.title}/>
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height : '100%'}} color="secondary" variant="outlined" onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    )
}
export default AddTodo;