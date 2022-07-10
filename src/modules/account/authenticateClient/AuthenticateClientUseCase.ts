import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({ where: { username } });
    const clientKey = process.env.CLIENT_KEY as string;

    if (!client) {
      throw new Error("Username or password invalid");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid");
    }

    const token = sign({ username }, clientKey, {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
