function renderBlankRegistrationForm() {
  renderRegistrationForm('','','','','','','','',0);
}

/**
 * Renders the initial registration dialog with default values filled for
 * the individual form elements.
 */
function renderRegistrationForm(first_name,
    last_name,
    email,
    organization,
    job_function,
    reg_type,
    country,
    special_requests,
    additional_banquet_tickets) {
    var regular_checked = (reg_type == 'regular') ? ' checked' : '';
    var student_checked = (reg_type == 'student') ? ' checked' : '';
    document.getElementById("reg_main").innerHTML = '<form id="registration">' +
        '  <table>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td>First Name*</td>' +
        '        <td><input type="text" id="r_first_name" value="' + first_name + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Last Name*</td>' +
        '        <td><input type="text" id="r_last_name" value="' + last_name + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Email Address*</td>' +
        '        <td><input type="email" id="r_email" value="' + email + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Organization*</td>' +
        '        <td><input type="text" id="r_organization" value="' + organization + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Title/Job Function</td>' +
        '        <td><input type="text" id="r_job_function" value="' + job_function + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Country*</td>' +
        '        <td><input type="text" id="r_country" value="' + country + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Special Request (Dietary restrictions, etc.)</td>' +
        '        <td><textarea id="r_special_request">' + special_requests + '</textarea></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Registration Type</td>' +
        '        <td id="reg_type_cell">' +
        '          <input type="radio" name="r_reg_type" id="r_reg_type_1" value="regular"' + regular_checked + '>Regular' +
        '          <br>' +
        '          <input type="radio" name="r_reg_type" id="r_reg_type_2" value="student"' + student_checked + '>Student' +
        '        </td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Additional banquet tickets</td>' +
        '        <td><input type="number" id="r_banquet" min="0" max="5" value="' + Number(additional_banquet_tickets) + '"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td></td>' +
        '        <td><input type="button" value="Next" onclick="trySubmitForm()"></td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '  <span id="r_message" class="error_message"></span>' +
        '</form>';
}

function isEarly() {
  return false;
}

function calculateBaseFee(reg_type) {
  if (isEarly()) {
    if (reg_type == 'student') {
      return 45000;
    } else {
      return 65000;
    }
  } else {
    if (reg_type == 'student') {
      return 50000;
    } else {
      return 70000;
    }
  }
}

/**
 * Renders a confirmation form restating the previously entered registration
 * details and providing a breakdown of the registration fees.
 */
function renderConfirmationForm(
    first_name,
    last_name,
    email,
    organization,
    job_function,
    reg_type,
    country,
    special_requests,
    additional_banquet_tickets) {
    var fee = calculateBaseFee(reg_type) + Number(additional_banquet_tickets) * 10000;
    document.getElementById("reg_main").innerHTML = '<form id="registration">' +
        '  <table>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td>First Name*</td>' +
        '        <td><b>' + first_name + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Last Name*</td>' +
        '        <td><b>' + last_name + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Email Address*</td>' +
        '        <td><b>' + email + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Organization*</td>' +
        '        <td><b>' + organization + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Title/Job Function</td>' +
        '        <td><b>' + job_function + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Country*</td>' +
        '        <td><b>' + country + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Special Request (Dietary restrictions, etc.)</td>' +
        '        <td><b>' + special_requests + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Registration Type</td>' +
        '        <td id="reg_type_cell"><b>' + (isEarly() ? 'early' : 'late') + ' / ' + reg_type + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Banquet tickets</td>' +
        '        <td><b>' + (1 + Number(additional_banquet_tickets)) + ' (' + additional_banquet_tickets + ' additional tickets)' + '</b></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>Total Amount</td>' +
        '        <td>JPY ' + fee + '</td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td colspan="2">' +
        '          <input id="c_back_button" type="button" value="Back">' +
        '          <input id="c_confirm_button" type="button" value="Confirm">' +
        '        </td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</form>';
    document.getElementById("c_back_button").onclick = function() {
        renderRegistrationForm(first_name,
            last_name,
            email,
            organization,
            job_function,
            reg_type,
            country,
            special_requests,
            additional_banquet_tickets);
    }
    document.getElementById("c_confirm_button").onclick = function() {
        submitToGoogleForm(
            first_name,
            last_name,
            email,
            organization,
            job_function,
            country,
            special_requests,
            reg_type,
            additional_banquet_tickets);
    }
}

function getValueByIdNonEmpty(id, message) {
    var element = document.getElementById(id);
    if (element.value.length < 1) {
        element.className = "form_invalid_value";
        return undefined;
    }
    element.className = "";
    return element.value;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

function trySubmitForm() {
    // Read mandatory values.
    var first_name = getValueByIdNonEmpty("r_first_name", "First name must be non-empty.");
    var last_name = getValueByIdNonEmpty("r_last_name", "Last name must be non-empty.");
    var organization = getValueByIdNonEmpty("r_organization", "Organization must be non-empty.");
    var country = getValueByIdNonEmpty("r_country", "Country must be non-empty.");
    var email = getValueByIdNonEmpty("r_email", "Email must be non-empty.");
    if (email !== undefined && !validateEmail(email)) {
        document.getElementById("r_email").className = "form_invalid_value";
        email = undefined;
    }

    // Read registration type.
    var reg_types = document.getElementsByName("r_reg_type");
    var reg_type = undefined;
    for (var i = 0; i < reg_types.length; ++i) {
        if (reg_types[i].checked) {
            reg_type = reg_types[i].value;
        }
    }
    if (reg_type == undefined) {
        document.getElementById("reg_type_cell").className = "form_invalid_value";
    } else {
        document.getElementById("reg_type_cell").className = "";
    }

    // Read optional values.
    var job_function = document.getElementById("r_job_function").value;
    var special_requests = document.getElementById("r_special_request").value;
    var additional_banquet_tickets = document.getElementById("r_banquet").value;

    // Check if all mandatory values are properly defined.
    var shouldSubmit =
        first_name !== undefined &&
        last_name !== undefined &&
        organization !== undefined &&
        country !== undefined &&
        email !== undefined &&
        reg_type !== undefined;
    if (shouldSubmit) {
        document.getElementById("r_message").innerHTML = "";
        renderConfirmationForm(
            first_name,
            last_name,
            email,
            organization,
            job_function,
            reg_type,
            country,
            special_requests,
            additional_banquet_tickets);
    } else {
        document.getElementById("r_message").innerHTML =
            "We encountered problems processing your request. Please review " +
            "your input and resubmit the form.";
    }
}

function submitToGoogleForm(
    first_name,
    last_name,
    email,
    organization,
    job_function,
    country,
    special_request,
    reg_type,
    banquet) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.withCredentials = true;
    xmlHttpRequest.onreadystatechange = function() {
        var READYSTATE_COMPLETED = 4;
        if (this.readyState == READYSTATE_COMPLETED) {
            document.getElementById("reg_main").innerHTML =
                "<p>Your information has been sent. Please check your email for details on how to pay the registration fee.</p>";
        }
    }
    xmlHttpRequest.open('POST', 'https://script.google.com/macros/s/AKfycbyYdCg6DsYaWI9Tnv5vJiTpU3G-nyIpmjubCyaP9IKtjg2fO30/exec');
    var form_data = new FormData();
    form_data.append("p_first_name", first_name);
    form_data.append("p_last_name", last_name);
    form_data.append("p_email", email);
    form_data.append("p_organization", organization);
    form_data.append("p_job_function", job_function);
    form_data.append("p_country", country);
    form_data.append("p_special_request", special_request);
    form_data.append("p_reg_type", reg_type);
    form_data.append("p_banquet", banquet);
    xmlHttpRequest.send(form_data);
}

