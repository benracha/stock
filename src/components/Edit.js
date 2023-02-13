import "./Edit.css";

function edit(props) {
    return (
        <div className="container">
            <div className="box-list">
                <div className="name-list">
                    <div className="text">
                        รายการสินค้า
                    </div>
                    <div className="box-input">
                        <input className="input"
                            onChange={event => { props.newList(event.target.value) }} />
                    </div>
                </div>
                <div className="name-list">
                    <div className="text">
                        รหัสสินค้า
                    </div>
                    <div className="box-input">
                        <input className="input"
                            onChange={event => { props.newProductCode(event.target.value) }} />
                    </div>
                </div>
                <div className="name-list">
                    <div className="text">
                        จำนวนคงเหลือ
                    </div>
                    <div className="box-input">
                        <input className="input"
                            onChange={event => { props.newBalance(event.target.value) }} />
                    </div>
                </div>
                <div className="name-list">
                    <div className="text">
                        สี
                    </div>
                    <div className="box-input">
                        <input className="input"
                            onChange={event => { props.newColor(event.target.value) }} />
                    </div>
                </div>
                <div className="name-list">
                    <div className="text">
                        ขนาด
                    </div>
                    <div className="box-input">
                        <input className="input"
                            onChange={event => { props.newSize(event.target.value) }} />
                    </div>
                </div>
            </div>
            <div className="btn-box-edit">
                <button
                    className="btn-edit-stock" onClick={() => props.edit()}>แก้ไข</button>
            </div>
        </div>

    )
}

export default edit;