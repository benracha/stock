import { useState } from "react";
import "./Search.css";
import AddData from "./AddData";
import Edit from "./Edit";

function Search() {

    const [totalStock, setTotalStock] = useState([{
        id: 1,
        list: "ดินสอ",
        productCode: "01",
        balance: 5,
        color: "ดำ",
        size: "ยาว 10ซม."
    }, {
        id: 2,
        list: "ปากกา",
        productCode: "02",
        balance: 3,
        color: "น้ำเงิน",
        size: "ยาว 14ซม."
    }, {
        id: 3,
        list: "ยางลบ",
        productCode: "03",
        balance: 3,
        color: "แดง",
        size: "ยาว 5ซม."
    }
    ])

    const [products, setProduct] = useState(totalStock)
    const [searchBar, setSearchBar] = useState("")

    function filterSearch() {
        const result = totalStock.filter(stock => stock.list.toLowerCase().includes(searchBar))
        setProduct([...result])
    }

    function onDelete(index) {
        const deleteData = products.filter((data, indexData) => indexData !== index)
        setProduct([...deleteData])
        const setDelete = totalStock.filter((data, indexData) => indexData !== index)
        setTotalStock([...setDelete])
    }

    const [onShow, setOnShow] = useState(false)
    function show(index) {
        setCurrentIndex(index)
        if (onShow === true) {
            setOnShow(false);
        } else
            setOnShow(true);
    }

    const [currentIndex, setCurrentIndex] = useState()

    const [newList, setNewList] = useState("")
    const [newProductCode, setNewProductCode] = useState(null)
    const [newBalance, setNewBalance] = useState(null)
    const [newColor, setNewColor] = useState("")
    const [newSize, setNewSize] = useState("")

    function add() {
        products.push({
            list: newList,
            productCode: newProductCode,
            balance: newBalance,
            color: newColor,
            size: newSize
        })
        setProduct([...products])
    }

    function onEdit() {
        products[currentIndex].list = newList
        products[currentIndex].productCode = newProductCode
        products[currentIndex].balance = newBalance
        products[currentIndex].color = newColor
        products[currentIndex].size = newSize
        setProduct([...products])

    }

    const [onShowAdd, setOnShowAdd] = useState(false)
    function ShowAdd() {
        if (onShowAdd === true) {
            setOnShowAdd(false);
        } else
            setOnShowAdd(true);
    }


    return (
        <div>
            <div className="header">
                <div className="stock">
                    <div className="icon-stock">
                        <i className="warehouse icon"></i>
                    </div>
                    <div>
                        สินค้าคงคลัง
                    </div>
                </div>
                <div className="add">
                    <button onClick={() => ShowAdd()}
                        className="btn-add">
                        เพิ่มสินค้า
                    </button>
                </div>
                { onShowAdd === true &&
                    <AddData
                        addNewData={add}
                        newList={setNewList}
                        newProductCode={setNewProductCode}
                        newBalance={setNewBalance}
                        newColor={setNewColor}
                        newSize={setNewSize} />}
            </div>
            <hr />
            <div className="search">
                <div className="text-search">ค้นหารายการสินค้าา</div>
                <input className="input-search"
                    onChange={event => setSearchBar(event.target.value)}
                />
                <button
                    className="btn-search"
                    onClick={() => filterSearch()}>ค้นหา</button>
            </div>
            <div className="table">
                <table>
                    <tr className="th">
                        <th>ลำดับ</th>
                        <th>รายการสินค้า</th>
                        <th>รหัสสินค้า</th>
                        <th>จำนวนคงเหลือ</th>
                        <th>สี</th>
                        <th>ขนาด</th>
                        <th>ปฏิบัติการ</th>
                    </tr>
                    {
                        products.map((stocks, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{stocks.list}</td>
                                    <td>{stocks.productCode}</td>
                                    <td>{stocks.balance}</td>
                                    <td>{stocks.color}</td>
                                    <td>{stocks.size}</td>
                                    <td>
                                        <button
                                            className="btn-edit"
                                            onClick={() => show(index)}>แก้ไข</button>

                                        <button
                                            className="btn-delete"
                                            onClick={() => onDelete(index)}>ลบ</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            {onShow === true &&
                <Edit
                    edit={onEdit}
                    newList={setNewList}
                    newProductCode={setNewProductCode}
                    newBalance={setNewBalance}
                    newColor={setNewColor}
                    newSize={setNewSize} />
            }
        </div>
    )
}

export default Search;