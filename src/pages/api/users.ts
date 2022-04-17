import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default(request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Pedro'},
        {id: 2, name: 'Gabriel'},
        {id: 3, name: 'Maria'},
    ]

    return response.json(users)
}