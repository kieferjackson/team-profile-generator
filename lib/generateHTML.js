
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
                case 'Manager':     role_char = `Office #: ${employee.getOfficeNum()}`; break;
                case 'Engineer':    role_char = `GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`; break;
                case 'Intern':      role_char = `School: ${employee.getSchool()}`; break;
            }

            employee_cards +=
            `
                    <div class="card employee_card col-3">
                        <div class="card-header">
                            <h1>${employee.name}</h1>
                            <h3>${employee.getRole()}</h3>
                        </div>
                        <ul class="list-group list-group-flush employee_info">
                            <div class="list-group-item info_box">ID: ${employee.getId()}</div>
                            <div class="list-group-item info_box">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></div>
                            <div class="list-group-item info_box">${role_char}</div>
                        </ul>
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
            <link 
                    rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
                    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
                    crossorigin="anonymous"
            >
        </head>

        <body>
            <div class="jumbotron profile_header">
                <h1 class="display-4">My Team</h1>
                <p class="lead">Software development team profile</p>
            </div>

            <div class="container">
                <div class="row g-2">
                    ${addEmployees()}
                </div>
            </div>
        </body>
    </html>
    `;

    return html_content;
}

module.exports = generateHTML;