import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import SysUser from 'App/Models/SysUser'

export default class SysUserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    // await SysUser.createMany([
    //   {
    //     'dept_id': '103',
    //     'user_name': 'admin',
    //     'nick_name': '若依',
    //     'user_type': '00',
    //     'email': 'ry@163.com',
    //     'phonenumber': '15888888888',
    //     'sex': '1',
    //     'avatar': '',
    //     'password': 'e10adc3949ba59abbe56e057f20f883e',
    //     'status': '0',
    //     'del_flag': '0',
    //     'login_ip': '127.0.0.1',
    //     'login_date': '2021-09-30 05:30:54',
    //     'create_by': 'admin',
    //     'update_by': 'admin',
    //     'remark': '管理员',
    //   },
    //   {
    //     'dept_id': '105',
    //     'user_name': 'ry',
    //     'nick_name': '若依',
    //     'user_type': '00',
    //     'email': 'ry@qq.com',
    //     'phonenumber': '15666666666',
    //     'sex': '1',
    //     'avatar': '',
    //     'password': 'e10adc3949ba59abbe56e057f20f883e',
    //     'status': '0',
    //     'del_flag': '0',
    //     'login_ip': '127.0.0.1',
    //     'login_date': '2021-09-10 19:15:38',
    //     'create_by': 'admin',
    //     'update_by': 'admin',
    //     'remark': '测试员',
    //   }
    // ])
  }
}
