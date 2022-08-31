
function generateHTML(employees)
{
    const addEmployees = () =>
    {
        let employee_cards = '';

        for (const employee of employees)
        {
            console.log(employees);
            console.log(`Generating HTML for this employee: ${employee.name}`);

            let role_char;
            switch(employee.getRole())
            {
                case 'Manager':     role_char = `Office #: ${employee.office_number}`; break;
                case 'Engineer':    role_char = `GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a>`; break;
                case 'Intern':      role_char = `School: ${employee.school}`; break;
            }

            employee_cards +=
            `
            <div class="employee_card">
                <header>
                    <h1>${employee.name}</h1>
                    <h3>${employee.getRole()}</h3>
                </header>
                <section class="employee_info">
                    <div class="info_box">ID: ${employee.id}</div>
                    <div class="info_box">Email: <a href="mailto:${employee.email}">${employee.email}</a></div>
                    <div class="info_box">${role_char}</div>
                </section>
            </div>
            `;
        }

        return employee_cards;
    }

    const html_content =
    `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./style.css">
        </head>

        <body>
            <header>My Team</header>
            <div class="employees_container">
                ${addEmployees()}
            </div>
        </body>
    </html>
    `;

    return html_content;
}

module.exports = generateHTML;