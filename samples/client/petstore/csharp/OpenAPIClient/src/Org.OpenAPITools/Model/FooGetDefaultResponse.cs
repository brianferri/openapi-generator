/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// FooGetDefaultResponse
    /// </summary>
    [DataContract]
    public partial class FooGetDefaultResponse :  IEquatable<FooGetDefaultResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FooGetDefaultResponse" /> class.
        /// </summary>
        /// <param name="varString">varString.</param>
        public FooGetDefaultResponse(Foo varString = default(Foo))
        {
            this.VarString = varString;
            this.VarString = varString;
        }

        /// <summary>
        /// Gets or Sets VarString
        /// </summary>
        [DataMember(Name="string", EmitDefaultValue=true)]
        public Foo VarString { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class FooGetDefaultResponse {\n");
            sb.Append("  VarString: ").Append(VarString).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as FooGetDefaultResponse);
        }

        /// <summary>
        /// Returns true if FooGetDefaultResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of FooGetDefaultResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FooGetDefaultResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.VarString == input.VarString ||
                    (this.VarString != null &&
                    this.VarString.Equals(input.VarString))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.VarString != null)
                    hashCode = hashCode * 59 + this.VarString.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
