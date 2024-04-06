import { DocumentNode, OperationVariables, useQuery } from "@apollo/client";

interface IProps {
    label: string;
    query: DocumentNode;
    variables?: OperationVariables;
}

export default function Query({ label, query, variables }: IProps) {
    const { loading, error, data } = useQuery(query, { variables });
    
    return (
        <>
            <div className="header">{label}</div>

            <pre className="query">
                {JSON.stringify({ loading, error, data }, null, 2)}
            </pre>
        </>
    );
}
