export const ErrorForm = (errors) => {
    return (
        <>
            {errors && <p className="text-red-600">{errors.errors}</p>}
        </>
    )
}