function withError(Component) {
    return (props) => {
        return <Component {...props}></Component>;
    };
}
export default withError;
