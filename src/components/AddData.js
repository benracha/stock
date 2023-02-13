import "./AddData.css";

function addData(props) {

    return (
        <div className="add-stock">
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
            <div className="btn-box-add">
                <button
                className="btn-add-stock"
                onClick={() => props.addNewData(props.index)}>เพิ่ม</button>
            </div>
        </div>
    );
}

export default addData;
