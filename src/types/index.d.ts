
type Children = string;

type Component<P = {}> = (props?: P & { children?: Children }) => string