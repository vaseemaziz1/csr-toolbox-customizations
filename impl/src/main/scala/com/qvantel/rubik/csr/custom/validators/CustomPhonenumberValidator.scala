package com.qvantel.rubik.csr.custom.validators

import javax.inject.Singleton
import com.qvantel.rubik.csr.api.validation.validators.phonenumber.PhonenumberValidator

import scala.concurrent.Future

/**
  * Example of how to create a custom PhonenumberValidor. This example will treat any string ending with "1" as valid.
  *
  * Enable this in application.conf by setting:
  * {{{
  * csr.validators.phonenumber = com.qvantel.rubik.csr.custom.validators.CustomPhonenumberValidator
  * }}}
  */
@Singleton
class CustomPhonenumberValidator extends PhonenumberValidator {
  override def validate(value: String): Future[Boolean] = {
    Future.successful(value.endsWith("1"))
  }
}
