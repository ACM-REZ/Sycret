export const Input = ({current, visible}) => {
    return (
        <div className="flex items-center h-10 justify-between border-2 border-sky-500 rounded-md bg-white">
            <div>
                <div>
                    <p className="pl-2">{!current ? 'Выберите товар' : `${current.NAME}`}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="w-[1px] bg-gray-500 block h-6"></span>
                <div className={`w-10 h-10 duration-100 ${visible === true ? 'rotate-180' : 'rotate-0'} flex justify-center items-center`}>
                    <svg className={`hover:fill-black duration-100 ${visible === true ? 'fill-black' : 'fill-gray-500'}`} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                </div>
            </div>
        </div>
    )
}