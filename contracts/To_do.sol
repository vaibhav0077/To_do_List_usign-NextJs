// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// YET TO IMPLIMINT , ADD charges on adding Task
// Creating a contract
contract To_Do_List {
    // Defining a structure to
    // store a task
    struct Task {
        string task;
        bool isDone;
    }

    mapping(address => Task[]) private Users;

    uint256 public taskaddCharge;

    //Declare an Event
    event moneyTransfer(
        address indexed _from,
        address indexed _id,
        uint256 _value
    );

    address public owner;

    constructor() {
        owner = msg.sender;
        taskaddCharge = 1 ether;
    }

    // Defining function to add a task
    function addTask(string calldata _task) external {
        // payable(address(this)).transfer(taskaddCharge);
        // require(payable(address(this)).transfer(taskaddCharge), "Task Not Added , Something Went Wrong");
        Users[msg.sender].push(Task({task: _task, isDone: false}));
    }

    // Defining a function to get details of a task
    function getTask(uint256 _taskIndex) external view returns (Task memory) {
        Task storage task = Users[msg.sender][_taskIndex];
        return task;
    }

    // Defining a function to update status of a task
    function updateStatus(
        uint256 _taskIndex,
        string memory _task_name,
        bool _status
    ) external {
        Users[msg.sender][_taskIndex].task = _task_name;
        Users[msg.sender][_taskIndex].isDone = _status;
    }

    // Defining a function to delete a task
    function deleteTask(uint256 _taskIndex) external {
        delete Users[msg.sender][_taskIndex];
    }

    // Defining a function to get task count.
    function getTaskCount() external view returns (uint256) {
        return Users[msg.sender].length;
    }

    function getAllTaskOfUser() external view returns (Task[] memory) {
        return Users[msg.sender];
    }

    function getContractBalance() external view returns (uint256) {
        require(msg.sender == owner, "Owner Can Only See the Blance");
        return address(this).balance;
    }

    function transferContractBalanceToAdminUser(uint256 _amount)
        public
        payable
    {
        require(
            _amount <= address(this).balance,
            "Insufficient Amount to Send"
        );
        if (!payable(address(msg.sender)).send(_amount)) {
            //handle failed send
            //Emit an event
            emit moneyTransfer(address(this), msg.sender, _amount);
        } else {
            emit moneyTransfer(address(this), msg.sender, _amount);
        }
    }
}
