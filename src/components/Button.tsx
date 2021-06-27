
type ButtonProps = {
    text?: string; // The '?' on the variable, makes it optional usage
}

export function Button(props: ButtonProps){
    return (
        <button>{props.text || 'Default'}</button>
    )
};