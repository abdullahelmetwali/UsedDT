const LoadingComponent = ({ parentClass, childClass, childrenNumber, mode }) => {
    return (
        <div className={`w-full ${parentClass}`}>
            {
                [...Array(childrenNumber)].map((_, index) => (
                    <div className={`${mode === 'd' ? 'darkLoader' : 'lightLoader'} ${Array.isArray(childClass) ? childClass[index] : childClass}`} key={index}></div>
                ))
            }
        </div>
    )
}
export default LoadingComponent