let courselist = $("#courses");

$("#Fetch-button").on("click", function () {
  $.get("https://codingninjas.in/api/v3/courses", function (data) {
    let courses = data.data.courses;
    for (let course of courses) {
      courselist.append(`
<div class ="card shadow-sm mx-2 my-4" style="width: 18rem, box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;" id="course-info-container">
<img src ="${course.preview_image_url}" class="card-img-top"  alt="..." >
<div class="card-body">
<p class ="card-text">${course.name}</p>
</div>
</div>

`);
    }
  });
  $("#get-course").remove();
});
