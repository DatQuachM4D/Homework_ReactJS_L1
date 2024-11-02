//EX1
// Tạo một arrow function để tính bình phương của một số
//  - Input: 4
//  - Output: square(4) -> 16
const sqaure = (num) => {
    return num*num;
}
console.log(sqaure(4));

//EX2
// Viết một arrow function để kiểm tra xem một chuỗi có chứa một từ khóa cụ thể hay không
// - Input: Chuỗi: "Hello world!", Từ khóa: "world"
// - Output: function(‘Hello world’, ’world’) -> true
const searchString = (string, keyWord) => {
    let sliptStringArr = string.split(" ");
    return sliptStringArr.find(el => el === keyWord)
}

const string = "Hello World";
console.log(searchString(string, "Hell")); 

//EX3
// Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi
// - Input: Mảng chuỗi: ["one", "two", "three"], Tiền tố: "number: "
// - Output: function(["one", "two", "three"], ’number’) 
//             -> ["number: one", "number: two", "number: three"]
const addToString = (arr, addWord) => {
    let newArr = [];
    arr.forEach(element => {
        element = addWord + element;
        newArr = [...newArr, element];
        console.log("arr after: ", newArr)
    });
    
}
addToString(["one", "two", "three"],"number: ");

//EX4
// Sử dụng 
// + Arrow function để nhân đôi giá trị của các phần tử trong một mảng số
// + (Buổi sau) map để nhân đôi giá trị của các phần tử trong một mảng số
// - Input: [1, 2, 3, 4]
// - Output: [2, 4, 6, 8]

var arr = [1, 2, 3, 4, 5, 6];
const mulNumber = arr.map((arr) => {
    return arr*2;
})
console.log(mulNumber);

// - Output: 67

//EX5
// Sử dụng
// + Arrow function để lấy ra các phần tử là số lẻ từ một mảng
// + (Buổi sau) filter để lấy ra các phần tử là số lẻ từ một mảng
// - Input: [1, 2, 3, 4, 5, 6]
// - Output: [1, 3, 5]

const findOddNum = arr.filter((arr) => {
    return arr%2 === 1;
});
console.log(findOddNum);

//EX6
// Tính tổng số công làm việc của các nhân viên
const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
const totalWork = employees.reduce((acc, employees) =>{
    return acc + employees.workingDays;
}, 0)
console.log(totalWork);

// EX7
// Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
const employeesSalery = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];
// - Output: { id: 3, name: "Mark", salary: 3000 }
const maxSalay = employeesSalery.reduce((employ,max) => {
    return max.salary >= employ.salary ? max:employ;
})

console.log(maxSalay);

// EX8
// Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)
// công = (workingDays - lateDays)
const employeesHard = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
// - Output: { id: 3, name: "Mark", workingDays: 25, lateDays: 1 }
const workHard = employeesHard.reduce((acc,workDays) => {
    return (workDays.workingDays - workDays.lateDays) > (acc.workingDays - acc.lateDays) ? workDays:acc;
})
console.log(workHard);

// EX9
// Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value
const employeesName = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
// - Output: {
//     "John": [
//         { id: 1, name: "John", salary: 2000 },
//         { id: 4, name: "John", salary: 2200 },
//     ],
//     "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
//     "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// } 
const groupByName = (arr) => {
    return arr.reduce((result, employee) => {
        const { name } = employee;
        
        // Kiểm tra nếu `name` chưa tồn tại trong `result`, tạo một mảng mới cho tên đó
        if (!result[name]) {
            result[name] = [];
        }
        
        // Thêm `employee` vào mảng của tên tương ứng
        result[name].push(employee);
        
        return result;
    }, {});
};

console.log(groupByName(employeesName));

// EX10
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên. 
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.
// hiệu suất = workingDays / salary
const employeesWorkHard = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
// - Output: { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 }
const Efficiency = (workDay, salary) => {
    return  workDay/salary;
}

    const maxEfficiency = employeesWorkHard.reduce((acc, max) => {
        return Efficiency(max.workingDays,max.Salay) > Efficiency(acc.workingDays,acc.Salay) ? max : acc;
    })

console.log(maxEfficiency);

// EX11
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc, và số lượng nhân viên nằm trong mốc đó.
const employeesCountDay = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];
// - Output: {
//     "20": 2,
//     "22": 2,
//     "24": 1
// }

const countWork = employeesCountDay.reduce((workDay,count) => {
     workDay[count.workingDays] = (workDay[count.workingDays] || 0) + 1;
     return workDay;
})
 console.log(countWork);

 let tasks = [
    {
      name: "Hoàn thành bài tập JavaScript",
      description: "Làm xong bài tập về Array và Object",
      completed: false,
    },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    {
      name: "Đi mua hàng",
      description: "Mua thêm thức ăn cho tuần",
      completed: false,
    },
  ];
  
  const addTask = (task) => tasks.push(task);
  
  const markTasksAsCompleted = (taskNames) => {
    tasks.forEach((task) => {
      if (taskNames.includes(task.name)) {
        task.completed = true;
      }
    });
  };
  
  const sortTasksByName = (order = "asc") => {
    return tasks.sort((a, b) => {
      if (a.name > b.name) return order === "asc" ? 1 : -1;
      if (a.name < b.name) return order === "asc" ? -1 : 1;
      return 0;
    });
  };
  
  addTask({
    name: "Tập thể dục",
    description: "30 phút cardio",
    completed: false,
  });
  markTasksAsCompleted(["Hoàn thành bài tập JavaScript", "Đi mua hàng"]);
  console.log(sortTasksByName("asc"));
  console.log(sortTasksByName("desc"));