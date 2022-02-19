import React from 'react';

const Employees = () => {
    return (
        <>
            <h4 className="mb-3">Employees Details</h4>
            <form>
                <div className="row g-3">
                    <div className="col-lg-6">
                        <label className="form-control" for="f-name">First Name</label>
                        <input type="text" className="form-control" id="f-name" placeholder='First Name' />
                    </div>
                    <div className="col-lg-6">
                        <label className="form-control" for="l-name">Last Name</label>
                        <input type="text" className="form-control" id="l-name" placeholder='Last Name' />
                    </div>
                    <div className="col-lg-12">
                        <label className="form-control" for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='email....' />
                    </div>
                    <div className="col-lg-12">
                        <label className="form-control" for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder='password....' />
                    </div>
                </div>
                <button className="mt-3 btn btn-primary btn-lg" type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default Employees;