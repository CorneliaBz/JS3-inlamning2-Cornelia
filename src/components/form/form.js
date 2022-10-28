const Form = (props) => {
    const formObject = {
        productName: "",
        amount: 0,
        date: "",
        productCategory: "",
        show:true
    }

    const submitForm = (e) => {
        e.preventDefault();
        for (const item of e.target.children){
            item.value = ""
        }
        console.log(formObject);
        props.addNewItem(formObject);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Product Name" required onChange={(event) => formObject.productName = event.target.value}></input>
                <input type="number" placeholder="number" min="1" required onChange={(event) => formObject.amount = parseInt(event.target.value)}></input>
                <input type="date" placeholder="mm/dd/yyyy" required onChange={(event) => formObject.date = event.target.value}></input>
                <input type="text" placeholder="Product Category" required onChange={(event) => formObject.productCategory = event.target.value}></input>
                <input type="submit" value="Add Product"></input>
            </form>
        </div>
    )
}

export default Form;
