function AddActor({ first_name, last_name, changeHandler, submitHandler }) {
    return <>
        <form>
            <label>First Name : </label>
            <input name="first_name" value={first_name} onChange={changeHandler} />
            <br />
            <label>Last Name : </label>
            <input name="last_name" value={last_name} onChange={changeHandler} />
            <br />
            <input type="submit" value={"Add Actor"} onclick={submitHandler} />
        </form>
    </>
}

export default AddActor;