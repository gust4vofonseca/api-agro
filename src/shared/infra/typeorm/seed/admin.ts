import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import { dataSource } from "@shared/infra/typeorm";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { Repository } from "typeorm";

async function create() {
    let connection: Repository<User>;

    connection = dataSource.getRepository(User);

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USER(id, name, email, password, "isAdmin", created_at, update_at)
            values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'now()')
        `
    );
}

create().then(() => console.log("User admin created!"));
