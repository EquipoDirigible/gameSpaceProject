import React, { useState } from 'react'; 
import axios from 'axios';

import ListProducts from './ListProducts';



export const handleDelete = async (id) => {
    // const [removedProduct, setRemovedProduct] = useState([]);
    // useEffect(() => {
    //      ListProducts().then(response) => {
    //             setRemovedProduct(response.data)
    // } 
    // }, [removedProduct]);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if(result.isConfirmed) {
                   await axios.delete(`http://localhost:3000/products/${id}`)
                    .then((response) => {
                        if(response.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Product deleted',
                                showConfirmButton: true,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                                    }) 
                            setUpdateList(updateList);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong',
                            })
                        }})
                    }})
}




