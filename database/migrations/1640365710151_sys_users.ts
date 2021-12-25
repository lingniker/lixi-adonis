import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SysUsers extends BaseSchema {
  protected tableName = 'sys_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.comment('用户信息表')
      table.increments('user_id').primary().comment('用户ID')
      table.string('dept_id').nullable().comment('部门ID')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('user_name', 30).nullable().comment("用户账号")
      table.string('nick_name', 30).nullable().comment("用户昵称")
      table.string('user_type', 2).notNullable().defaultTo('00').comment("用户类型（00系统用户）")
      table.string('email', 50).notNullable().defaultTo('').comment("用户邮箱")
      table.string('phonenumber', 11).notNullable().defaultTo('').comment("手机号码")
      table.string('sex', 1).notNullable().defaultTo('0').comment("用户性别（0男 1女 2未知）")
      table.string('avatar', 100).notNullable().defaultTo('').comment("头像地址")
      table.string('password', 100).notNullable().defaultTo('').comment("密码")
      table.string('status', 1).notNullable().defaultTo('0').comment("帐号状态（0正常 1停用）")
      table.string('del_flag', 1).notNullable().defaultTo('0').comment("删除标志（0代表存在 2代表删除）")
      table.string('login_ip', 128).notNullable().defaultTo('').comment("最后登录IP")
      table.timestamp('login_date', { useTz: true }).comment("最后登录时间")
      table.string('create_by', 64).notNullable().defaultTo('').comment("创建者")
      table.string('update_by', 64).notNullable().defaultTo('').comment("更新者")
      table.string('remark', 500).nullable().comment("备注")
      table.timestamp('created_at', { useTz: true }).comment("创建时间")
      table.timestamp('updated_at', { useTz: true }).comment("更新时间")
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
