import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SysUser extends BaseModel {
  @column({ isPrimary: true })
  public user_id: number

  @column()
  public dept_id: string

  @column()
  public user_name: string

  @column()
  public nick_name: string

  @column()
  public user_type: string

  @column()
  public email: string

  @column()
  public phonenumber: string

  @column()
  public sex: string

  @column()
  public avatar: string

  @column()
  public password: string

  @column()
  public status: string

  @column()
  public del_flag: string

  @column()
  public login_ip: string

  @column.dateTime()
  public login_date: DateTime

  @column()
  public create_by: string

  @column()
  public update_by: string

  @column()
  public remark: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}