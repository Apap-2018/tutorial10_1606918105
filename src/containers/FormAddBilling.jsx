import React from 'react';
export const FormAddBilling = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Billing Pasien atas nama {props.pasien.nama}</h2>
            <div className="form-group">
                <label>Id Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="pasien.id" defaultValue={props.pasien.id} readOnly/>
            </div>
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="text" className="form-control" name="jumlahTagihan"/>
            </div>
           <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.tanggalTagihan }/>
            </div>
            <button className="btn btn-success" value="submit">Add Billing</button>
        </form>
    )
}


