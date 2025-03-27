let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
function saveToLocalStorage() {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}
window.onload = function () {
    showJobs();
};

// tao ham tao danh sach cong viec

function addJob() {
    let jobName = document.getElementById("job").value.trim();
    let id = jobs.length ? jobs[jobs.length - 1].id + 1 : 1;
    if (!jobName) {
        alert("Hãy nhập tên công việc!");
        return;
    }
    let job = {
        id: id,
        name: jobName,
        completed: false
    }
    jobs.push(job);
    saveToLocalStorage();
    showJobs();
    document.getElementById("job").value = "";
}

// tao ham hien thi cong viec

function showJobs(listJobs = jobs) {
    let str = jobs.map((job, index) => `
    <li class="${job.completed ? "checked" : ""}">${job.name}<button class="completed-btn" onclick="completedJob(${index})">Đã hoàn thành</button><button class="update-btn" onclick="updateJob(${index})">Sửa</button><button class="delete-btn" onclick="removeJob(${index})">Xóa</button></li>
    `).join("");
    document.getElementById("listJobs").innerHTML = str;
}

// tao ham sua ten cong viec

function updateJob(index) {
    jobs[index].name = prompt("Nhập tên mới") || jobs[index].name;
    saveToLocalStorage();
    showJobs();
}

// tao ham xoa

function removeJob(index) {
    if (confirm("Bạn có muốn xóa hay không?")) {
        jobs.splice(index, 1);
    }
    saveToLocalStorage();
    showJobs();
}

// tao ham danh dau cong viec da hoan thanh
function completedJob(index) {
    jobs[index].completed = !jobs[index].completed; 
    saveToLocalStorage();
    showJobs(); 
}



