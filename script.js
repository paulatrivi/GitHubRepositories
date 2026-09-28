$("#searchButton").click(function () {

    let username = $("#username").val();

    if (username == "") {
        alert("Please enter a username");
        return;
    }

    let url = "https://api.github.com/users/" + username + "/repos";

    $("#repoTableBody").empty();

    $.get(url, function(data) {

        $.each(data, function(index, repo) {

            let description = repo.description;

            if (description == null) {
                description = "No description";
            }

            let row = "<tr>" +
                "<td>" + repo.name + "</td>" +
                "<td>" + description + "</td>" +
                "<td>" + repo.watchers_count + "</td>" +
                "</tr>";

            $("#repoTableBody").append(row);
        });

    }).fail(function() {

        alert("Username not found");

    });

});