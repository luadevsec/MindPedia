// não está sendo usado para não gerar erros de tipagem

interface responses {
    body: {
        message: string;
        status: number;
        error: string | null;
        data: unknown;
    }
}

export default responses;