import { useState } from "react"
import { ClickAwayListener } from "@mui/material"
import { Input } from "./Input"
import { Item } from "./Item"

export const Selector = ({ current, data }) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="cursor-pointer max-w-xs w-full mt-4" >
            <ClickAwayListener onClickAway={() => setVisible(false)}>
                <div onClick={() => setVisible(!visible)}>
                    <Input visible={visible} current={current} data={data}/>
                    <div className={`${visible === true ? 'block' : 'hidden'} duration-100 border-2 border-sky-500 mt-4 rounded-md bg-white`}>
                        {
                            data.map((item, key) => {
                                return (
                                    <Item 
                                        key={key} 
                                        current={current} 
                                        item={item} 
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    )
}