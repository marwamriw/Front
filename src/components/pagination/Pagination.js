import React from 'react';
import { BiLastPage } from "react-icons/bi";
import { BiFirstPage } from "react-icons/bi";
import { ImBackward } from "react-icons/im";
import { ImNext } from "react-icons/im";




const Pagination = ({setCurrentPage, currentPage, numberOfPages, dispatch}) => {

        const renderPagination = () => {
            if (currentPage === numberOfPages && currentPage ===1) return null;  //if there is only one page show nothing
            if (currentPage ===1){
                return(
                    <>
                        <p>1</p>
                        <button onClick={()=>{ dispatch(setCurrentPage(currentPage+1))}} className="hint--right" aria-label="Go to the next page" ><ImNext style={{fontSize: '26px', color:' hsl(264, 61%, 20%)'}} /></button>
                    </>
                ) }

            else if(currentPage !== numberOfPages){
                return (
                    <>
                        <button onClick={()=>{ dispatch(setCurrentPage(currentPage-1))}} className="hint--left" aria-label="Back to the next page"><ImBackward style={{fontSize: '26px', color:' hsl(264, 61%, 20%)'}} /></button>
                        <p>{currentPage}</p>
                        <button onClick={()=>{ dispatch(setCurrentPage(currentPage+1))}} className="hint--right" aria-label="Go to the next page"><ImNext style={{fontSize: '26px', color:' hsl(264, 61%, 20%)'}} /></button>
                    </>
                )
            }else {
                return(
                <>
                    <button onClick={()=>{ dispatch(setCurrentPage(currentPage-1))}} className="hint--left" aria-label="Back to the next page"> <ImBackward style={{fontSize: '26px', color:' hsl(264, 61%, 20%)'}}/></button>
                    <p>{currentPage}</p>
                </>
            )}
        }
    return (
        <div style={{display: "flex", justifyContent:"center"}}> 
            {renderPagination()}
        </div>
    )
}

export default Pagination
