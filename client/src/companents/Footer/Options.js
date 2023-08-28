export default function Options(obj) {
    return (
        <>
            {obj.data.map((el) => (
                <p>{el}</p>
            ))}
        </>
    )
}