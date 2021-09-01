import styled from 'styled-components'

export const Article = styled.article`
    position:relative; width:450px; padding:20px; margin-bottom:10px; border:1px solid #555; background-color:rgba(0, 0, 0, .3); cursor:pointer;

    h3 {margin-bottom:15px; font-size:26px; color:#000;}
    p {font-size:18px;}
    .icon {position:absolute; top:50%; right:20px; font-size:28px; transform:translateY(-50%);}
    &.on {
        background-color:#fff;
        h3 {color:orange;}
    }
`

export const PlanForm = styled.form`
    width:450px; padding:20px; margin-bottom:10px; border:1px solid #999;

    div {
        margin-bottom:15px;
        label {display:inline-block; width:70px;}
        input[type=text] {width:346px; height:25px; padding:0 15px; border:1px solid #999;}
        input[type=checkbox] {margin:0;}
    }
    button {width:100%; height:35px; color:#fff; font-weight:700; background-color:#000; border:none;}
`